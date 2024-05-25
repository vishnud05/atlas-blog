import { ClientResponseObject } from "@/types";

export async function useQuery<T>(
  fn: Function,
  args: any
): Promise<ClientResponseObject<T>> {
  try {
    const data = await fn(args);
    return {
      status: "success",
      message: "Data fetched successfully",
      data,
      error: null,
    };
  } catch (error: any) {
    if (process.env.ENVIRONMENT === "prod") {
      return {
        status: "error",
        message: "Error occurred",
        data: null,
        error,
      };
    } else {
      return {
        status: "error",
        message: error.message,
        data: null,
        error,
      };
    }
  }
}
