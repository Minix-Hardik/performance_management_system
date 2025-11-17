interface CustomWindowProps {
    cur_frm?: {
        doc?: any
        set_value?: (field: string, value: any, if_missing?: boolean, skip_dirty_trigger?: boolean) => void
        reload_doc?: () => void
    },
    frappe?: {
        ui?: any;
        workspace?: any;
        msgprint?: (...args: any[]) => void;
        csrf_token?: string;
        realtime?: any;
        boot?: any;
        user?: any;
        is_user_logged_in?: () => boolean;
        set_route?: (...route: string[] | string[][]) => void;
        db?: any;
        meta?: any;
        model?: any;
        show_alert?: (...args: any[]) => void;
        datetime?: any;
        router?: any;
        call?: (...args: any[]) => any;
        get_doc?: (...args: any[]) => void;
        get_route?: any;
        session?: {
            user?: string;
        };
        confirm?: (...args: any[]) => void;
        throw?: (...args: any[]) => void;
        utils: any;
    };
}

declare global {
    interface Window extends CustomWindowProps {
        __: (s: string) => string;
    }
}
