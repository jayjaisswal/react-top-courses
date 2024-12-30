import './Filter.css';
function Filter({ filterdata , setCategory, category}) {

  function filterHandler(title){
    setCategory(title);

  }
  return (
    <div className="parentbtn" >
      {filterdata.map((data) => {  // study about map function
        return <button onClick={() => filterHandler(data.title)} className="btn btn-primary spacing" key={data.id}>{data.title}</button>;
      })}
    </div>
  );
}
export default Filter;
