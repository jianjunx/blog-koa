import * as path from "path";
//日志根目录
const baseLogPath = path.resolve(__dirname, "../logs");

//错误日志目录
const errorPath = "/error";
//错误日志文件名
const errorFileName = "Error";
//错误日志输出完整路径
const errorLogPath = baseLogPath + errorPath + "/" + errorFileName;

//响应日志目录
const responsePath = "/response";
//响应日志文件名
const responseFileName = "Response";
//响应日志输出完整路径
const responseLogPath = baseLogPath + responsePath + "/" + responseFileName;

export default {
    appenders: {
        error: {
            type: "dateFile",
            category: "resLogger",
            filename: errorLogPath,
            pattern: "-yyyy-MM-dd.log", //日志输出模式
            alwaysIncludePattern: true,
            maxLogSize: 104800,
            backups: 100
        },
        response: {
            type: "dateFile",
            category: "resLogger",
            filename: responseLogPath,
            pattern: "-yyyy-MM-dd.log", //日志输出模式
            alwaysIncludePattern: true,
            maxLogSize: 104800,
            backups: 100
        }
    },
    categories: {
        error: { appenders: ["error"], level: "error" },
        response: { appenders: ["response"], level: "info" },
        default: { appenders: ["response"], level: "info" }
    }
};
