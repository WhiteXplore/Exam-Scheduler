import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    // Multiple origins array for CORS configuration
    const whiteList = [process.env.CORS_ORIGIN || 'http://localhost:8080'];
    app.use(cookieParser());
    app.enableCors({
      origin: (origin, callback) => {
        if (!origin || whiteList.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // Ensure cookies and credentials are allowed
    });

    const port = process.env.PORT || 8000;
    await app.listen(port);

    console.log(`Application is running on: http://localhost:${port}`);
  } catch (error) {
    console.error('Error starting application:', error);
    process.exit(1); // Exit with failure code if app setup fails
  }
}

bootstrap();
