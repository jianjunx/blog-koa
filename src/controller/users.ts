import db from "../utils/db";

export const userLogin = async (ctx: any, next: any) => {
    const res = await db.in("SELECE").out([]);
    
};
