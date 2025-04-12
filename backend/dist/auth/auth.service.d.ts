import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Response, Request } from 'express';
import { User_Accounts } from 'src/entities/users.entity';
export declare class AuthService {
    private readonly jwtService;
    private readonly userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<User_Accounts>);
    findUserByEmail(email: string): Promise<User_Accounts | null>;
    validateUser(email: string, password: string): Promise<User_Accounts>;
    login(email: string, password: string, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(res: Response): Promise<Response<any, Record<string, any>>>;
    getProfile(req: Request): Promise<{
        id: number;
        email: string;
        role: string;
        first_name: string;
        last_name: string;
        position: string;
    }>;
}
