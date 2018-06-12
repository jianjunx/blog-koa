import {ErrMsg} from '../model/enum';

// 通过错误代码获取提示信息
export default (code: number):string => {
    return ErrMsg[code] || ErrMsg[0];
};
