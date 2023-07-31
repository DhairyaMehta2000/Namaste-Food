// Rendering out the food in menu 

const MenuItem = (props) => {
    // console.log(props)
  return <div>
            <h6>
                Name - {props.data.name}
            </h6>
        </div>;
};
export default MenuItem;
