interface IViewName {
    name: string;
}

const ViewName = ({ name }: IViewName) => {
    return <div className="container-view-name">{name}</div>;
};

export default ViewName;
