import { PostPhotoUrlPipe } from "./post-photo-url.pipe";

describe('PostPhotUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new PostPhotoUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
