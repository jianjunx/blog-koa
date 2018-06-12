import * as jwt from "jsonwebtoken";
import * as fs from "fs";
import * as path from 'path';
import { SignIn } from "../model/interface";

const keyPath = path.resolve(__dirname,'../public/key')
// 密钥
const cert = fs.readFileSync(keyPath+"/jeffy.pub");

/**
 * token过期时间
 * @param d 时长
 */
const date = (d: number) => {
    return Math.floor(Date.now() / 1000) + 60 * 60 * d;
};

/**
 * 生成Token
 * @param data
 */
export const sign = (data: SignIn) => {
    return new Promise((resolve: any, reject: any) => {
        jwt.sign(
            {
                exp: date(100),
                data
            },
            cert,
            (err: any, token: string) => {
                if (err) {
                    reject(0);
                    return;
                }
                resolve(token);
            }
        );
    });
};


/**
 * decoded
 * @param token decoded token
 */
export const verify = (token: string):number|any =>  {
    return new Promise((resolve: any, reject: any) => {
        jwt.verify(token, cert, (err: any, decoded: object):void => {
            if (err) {
                reject(0);
                return;
            }
            resolve(decoded); //返回解析后的token内容
        });
    });
};
