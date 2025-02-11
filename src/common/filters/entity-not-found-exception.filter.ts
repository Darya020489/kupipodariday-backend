import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { EntityNotFoundError } from "typeorm";
import { Response } from "express";
import { filterCode, filterMessage } from "../variables/variables";

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // response.status(404).json({
    //   message: {
    //     statusCode: 404,
    //     message: "Объект не найден",
    //   },
    // });
    response.status(filterCode.notFound).json({
      message: {
        statusCode: filterCode.notFound,
        message: filterMessage.notFound,
      },
    });
  }
}
