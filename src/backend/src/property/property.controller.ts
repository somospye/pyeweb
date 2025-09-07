import {
  Body,
  Controller,
  Get, HttpCode,
  Param, ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdPipes';

@Controller('property')
export class PropertyController {

  @Get()
  findAll() {
    return "All Properties"
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    console.log(typeof id)
    return id
  }

  @Post()
  // @UsePipes()
  @HttpCode(202)
  create(@Body()
  body: CreatePropertyDto) {
    return body;
  }

  @Patch(":id")
  update(
    @Param("id", ParseIdPipe) id,
    @Body() body: CreatePropertyDto) {
    return body
  }
}
