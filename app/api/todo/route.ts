export async function GET(request: Request) {
  // validate user
  // auth
  console.log("This is running on the server");
  // Wait for one second

  await new Promise((resolve) => setTimeout(resolve, 3000));

  // throw new Error("error");
  return Response.json({ message: "Success again" });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return Response.json({ message: "Success POST", body });
}
