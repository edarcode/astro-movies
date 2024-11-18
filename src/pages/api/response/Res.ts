export class Res {
  private static headers = { "Content-Type": "application/json" };

  public static err() {
    return new Response(JSON.stringify({ msg: "Error de servidor." }), {
      status: 500,
      headers: this.headers,
    });
  }

  public static errClient() {
    return new Response(JSON.stringify({ msg: "Error de client." }), {
      status: 400,
      headers: this.headers,
    });
  }

  public static notFound() {
    return new Response(JSON.stringify({ msg: "Recurso no encontrado" }), {
      status: 404,
      headers: this.headers,
    });
  }

  public static json({
    status = 200,
    data,
  }: {
    status?: number;
    data: unknown;
  }) {
    return new Response(JSON.stringify(data), {
      status,
      headers: this.headers,
    });
  }
}
