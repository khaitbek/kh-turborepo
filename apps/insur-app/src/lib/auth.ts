import { jwtVerify } from "jose"
interface UserJwtPayload {
  jti: string;
  iat: number;
}
export const getJwtSecretKey = () => {
    const secret = process.env.SECRET_KEY
    if (!secret || secret.length === 0) {
        throw new Error("The env variable SECRET_KEY is not set")
    }
    return secret
}
export const verifyAuth = async (token: string) => {
    console.log("TOKEN", token);
    try {
        const verified = await jwtVerify(
            token,
            new TextEncoder().encode(getJwtSecretKey())
        )
      return verified.payload as UserJwtPayload
    } catch (error) {
        console.log(error);
        throw new Error("Token has expired")
    }
}
