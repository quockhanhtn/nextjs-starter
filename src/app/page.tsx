import { NextImage } from '~/components/@next';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world !</h1>

      <NextImage
        src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000"
        width={500}
        height={200}
      />
      <NextImage src="https://img.freepik.com/sssafaf" width={500} height={200} />
    </main>
  );
}
