import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Review = ({ steps }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    // console.log("steps--",steps)
    const arry =[steps]
    arry.map((val)=>{
      if(val.gender.message !=''){
        setGender(val.gender.value);
      }
      if(val.age.message !=''){
        setAge(val.age.value);
      }
      if (val.firstname.message!='') {
          setName(val.firstname.value);
        }
    });

  }, [steps]);

  return (
    <div style={{ width: '100%' }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;