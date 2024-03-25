import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Additional Margin</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="0-10"
          title="Upto 10%"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="10-20"
          title="10% - 20%"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="20-30"
          title="21% - 30%"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="30-40"
          title="31% - 40%"
          name="test2"
        />

      <Input
          handleChange={handleChange}
          value="40-50"
          title="41% - 50%"
          name="test2"
        />

      <Input
          handleChange={handleChange}
          value="50-200"
          title="Over 50%"
          name="test2"
        />
      </div>
    </div>
  );
}

export default Category;