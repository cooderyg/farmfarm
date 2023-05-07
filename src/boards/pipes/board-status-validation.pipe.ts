import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidetionPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} 값이 유효하지 않습니다.`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index != -1;
  }
}
