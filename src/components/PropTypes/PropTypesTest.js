import { PropTypes } from "prop-types";

export const PropTypesTest = ({ name, age, renderable, component }) => {
  return (
    <>
      <p>
        In 5 years, {name} will be {age + 5}.
      </p>

      <div>{renderable}</div>
      <div>{component}</div>
    </>
  );
};

PropTypesTest.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  renderable: PropTypes.node,
  component: PropTypes.element,
  children: PropTypes.element,
  nickname: PropTypes.any.isRequired,
  stringOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  state: PropTypes.oneOf(["loading", "ready"]),
  specificArray: PropTypes.arrayOf(PropTypes.number),
  mixedArray: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};
