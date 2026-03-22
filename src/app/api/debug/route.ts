export async function GET() {
  return Response.json({
    hasUsername: !!process.env.AUTH_USERNAME,
    usernameLength: process.env.AUTH_USERNAME?.length ?? 0,
    hasPassword: !!process.env.AUTH_PASSWORD,
    passwordLength: process.env.AUTH_PASSWORD?.length ?? 0,
    hasSecret: !!process.env.AUTH_SECRET,
  });
}
