import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { DataModel } from "../types";
import data from "../data/data.json";

interface ContextProps {
    list?: (DataModel | undefined)[];
    setList?: React.Dispatch<React.SetStateAction<(DataModel | undefined)[]>>;
    total?: number;
    setTotal?: React.Dispatch<React.SetStateAction<number>>;
    children?: ReactNode;
}

const ProductsListContext = createContext<ContextProps>({});

const ProductsListContextProvider = ({ children }: ContextProps) => {
    const [list, setList] = useState<(DataModel | undefined)[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setList(data);
    }, []);

    // useEffect(() => {
    //     list.map(item => setTotal(t => t += (item?.subTotal ?? 0)));
    // }, [list]);

    const value = useMemo(() => {
        return {
            list,
            setList,
            total,
            setTotal,
        };
    }, [list, total]);

    return (
        <ProductsListContext.Provider value={value}>
            {children}
        </ProductsListContext.Provider>
    );
};

const useProductsList = (): ContextProps => {
    const context = useContext(ProductsListContext);

    if (context == null || context === undefined)
        throw new Error(
            "useProductsList debe usarse dentro de ProductsListContext"
        );

    return context;
};

export { ProductsListContext, ProductsListContextProvider, useProductsList };
