import { ReactNode } from "react";
import { MetaData } from "./meta-data.type";

export interface LayoutType{
    metaInfo: MetaData;
    children: ReactNode;
}