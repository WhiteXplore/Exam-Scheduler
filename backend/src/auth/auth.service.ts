import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';
import { User_Accounts } from 'src/entities/users.entity';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(User_Accounts)
    private readonly userRepository: Repository<User_Accounts>,
  ) {}

  // Find a user by email
  async findUserByEmail(email: string): Promise<User_Accounts | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return user;
  }

  async login(email: string, password: string, res: Response) {
    const user = await this.validateUser(email, password);
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      first_name: user.first_name,
      last_name: user.last_name,
      position: user.position,
    };

    const token = this.jwtService.sign(payload, { expiresIn: '1h' }); // Token expires in 1 hour

    // ✅ Store JWT in HTTP-only cookie
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // True in production
      sameSite: 'strict',
      maxAge: 3600000, // 1 hour
    });

    return res.json({
      message: 'Login successful',
      role: user.role, // Include role in response
    });
  }

  async logout(res: Response) {
    res.clearCookie('jwt');
    return res.status(200).json({ message: 'Logged out successfully' });
  }

  // ✅ Get logged-in user from JWT
  async getProfile(req: Request) {
    try {
      const token = req.cookies['jwt'];
      if (!token) {
        throw new UnauthorizedException('Not authenticated');
      }

      const decoded = this.jwtService.verify(token);
      const user = await this.userRepository.findOne({
        where: { id: decoded.sub },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      return {
        id: user.id,
        email: user.email,
        role: user.role,
        first_name: user.first_name,
        last_name: user.last_name,
        position: user.position,
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
