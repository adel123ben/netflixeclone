import { on } from "events";
import { divide, set } from "lodash";
import {create} from "zustand";

export interface useinfoModel{
    mouviId?: string;
    isOpen: boolean;
    openModel: (mouviid: string) => void;
    closeModel: () => void;
}

const useInfoModel = create<useinfoModel>((set) => ({
    mouviId: undefined,
    isOpen: false,
    openModel: (mouviId: string ) => set({isOpen: true, mouviId}),
    closeModel : () => set({isOpen: false, mouviId: undefined}),

}))

export default useInfoModel