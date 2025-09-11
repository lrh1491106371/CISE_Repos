import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'; // 添加这一行

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  dotenv.config(); // 添加这一行，加载.env文件
  const PORT = process.env.PORT || 4000; // 添加这一行，使用环境变量或默认5000
  await app.listen(PORT); // 修改为使用PORT变量
  //await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
