export async function POST(request: Request): Promise<Response> {
    const formData = await request.formData();

    console.log(formData);
    console.log(formData.keys())

    formData.get('files');

    return new Response();
}