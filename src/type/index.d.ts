export { }
declare global {
    interface IResponse<T = any> {
        Code: number;
        Msg: string;
        Data: T;
    }
    interface IObject<T> {
        [index: string]: T
    }
}