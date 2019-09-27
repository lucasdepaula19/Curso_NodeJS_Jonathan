import { Pipe, PipeTransform } from '@angular/core';
import {endpointApiAddress} from '../service/endpoint-api-address'

@Pipe({
  name: 'postPhotoUrl'
})
export class PostPhotoUrlPipe implements PipeTransform {

  transform(postId: string): string {
    return `${endpointApiAddress}/PostPhotoContainers/main/download/${postId}`
  }

}
