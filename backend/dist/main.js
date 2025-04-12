"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const whiteList = [process.env.CORS_ORIGIN || 'http://localhost:8080'];
        app.use(cookieParser());
        app.enableCors({
            origin: (origin, callback) => {
                if (!origin || whiteList.includes(origin)) {
                    callback(null, true);
                }
                else {
                    callback(new Error('Not allowed by CORS'));
                }
            },
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
        });
        const port = process.env.PORT || 8000;
        await app.listen(port);
        console.log(`Application is running on: http://localhost:${port}`);
    }
    catch (error) {
        console.error('Error starting application:', error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map