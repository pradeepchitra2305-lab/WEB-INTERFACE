import React, { useState } from "react"; 
export default function App() { 
const [formData, setFormData] = useState({ 
    firstName: "", lastName: "", username: "", email: "", 
    mobile: "", dob: "", gender: "", address: "", city: "", 
    state: "", pincode: "", password: "", confirmPassword: "", 
    college: "", department: "", 
  }); 
 
  const [errors, setErrors] = useState({}); 
  const [submitted, setSubmitted] = useState(false); 
 
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData((prev) => ({ ...prev, [name]: value })); 
    setErrors((prev) => ({ ...prev, [name]: "" })); 
    setSubmitted(false); 
  }; 
 
  const validateForm = () => { 
    let newErrors = {}; 
 
    if (!formData.firstName.trim()) 
      newErrors.firstName = "First name is required"; 
    else if (!/^[A-Za-z]+$/.test(formData.firstName.trim())) 
      newErrors.firstName = "First name should contain only letters"; 
 
    if (!formData.lastName.trim()) 
      newErrors.lastName = "Last name is required"; 
    else if (!/^[A-Za-z]+$/.test(formData.lastName.trim())) 
      newErrors.lastName = "Last name should contain only letters"; 
 
    if (!formData.username.trim()) 
      newErrors.username = "Username is required"; 
    else if (formData.username.trim().length < 4) 
      newErrors.username = "Username must contain at least 4 characters"; 
 
    if (!formData.email.trim()) 
      newErrors.email = "Email is required"; 
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) 
      newErrors.email = "Enter a valid email address"; 
 
    if (!formData.mobile.trim()) 
      newErrors.mobile = "Mobile number is required"; 
    else if (!/^[0-9]{10}$/.test(formData.mobile.trim())) 
      newErrors.mobile = "Mobile number must contain exactly 10 digits"; 
 
    if (!formData.dob) newErrors.dob = "Date of birth is required"; 
    if (!formData.gender) newErrors.gender = "Please select your gender"; 
 
    if (!formData.address.trim()) 
      newErrors.address = "Address is required"; 
    else if (formData.address.trim().length < 10) 
      newErrors.address = "Address must contain at least 10 characters"; 
 
    if (!formData.city.trim()) newErrors.city = "City is required"; 
    if (!formData.state) newErrors.state = "Please select a state"; 
 
    if (!formData.pincode.trim()) 
      newErrors.pincode = "Pincode is required"; 
    else if (!/^[0-9]{6}$/.test(formData.pincode.trim())) 
      newErrors.pincode = "Pincode must contain exactly 6 digits"; 
 
    if (!formData.password) 
      newErrors.password = "Password is required"; 
    else if (formData.password.length < 8) 
      newErrors.password = "Password must contain at least 8 characters"; 
    else if (!/[A-Z]/.test(formData.password) || 
             !/[a-z]/.test(formData.password) || 
             !/[0-9]/.test(formData.password)) 
      newErrors.password = 
        "Password must contain uppercase, lowercase and a number"; 
 
    if (!formData.confirmPassword) 
      newErrors.confirmPassword = "Please confirm your password"; 
    else if (formData.password !== formData.confirmPassword) 
      newErrors.confirmPassword = "Passwords do not match"; 
 
    if (!formData.college.trim()) 
      newErrors.college = "College name is required"; 
    if (!formData.department) 
      newErrors.department = "Please select your department"; 
 
    setErrors(newErrors); 
    return Object.keys(newErrors).length === 0; 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (validateForm()) { 
      setSubmitted(true); 
      console.log("Registration Successful:", formData); 
    } else { 
      setSubmitted(false); 
    } 
  }; 
 
  const handleReset = () => { 
    setFormData({ 
      firstName: "", lastName: "", username: "", email: "", 
      mobile: "", dob: "", gender: "", address: "", city: "", 
      state: "", pincode: "", password: "", confirmPassword: "", 
      college: "", department: "", 
    }); 
    setErrors({}); 
    setSubmitted(false); 
  }; 
 
  return ( 
    <div className="page-wrapper"> 
      <div className="form-card"> 
        <header className="form-header"> 
          <div className="badge">Unit 4 Project</div> 
          <h1>Student Registration Portal</h1> 
          <p className="subtitle"> 
            Fill in all 15 required fields to submit your registration. 
          </p> 
        </header> 
 
        {submitted && ( 
          <div className="success-banner"> 
            <div className="icon-circle">✓</div> 
            <div> 
              <h3>Registration Successful!</h3> 
              <p>Your form details have been validated.</p> 
            </div> 
          </div> 
        )} 
 
        <form onSubmit={handleSubmit} noValidate> 
          {/* Personal Information */} 
          {/* Contact & Address */} 
          {/* Academic Details */} 
          {/* Security */} 
          {/* Form fields and validation messages */} 
          <div className="button-row"> 
            <button type="submit" className="btn-primary"> 
              Register Student 
            </button> 
            <button type="button" className="btn-secondary" 
              onClick={handleReset}> 
              Reset Form 
            </button> 
          </div> 
        </form> 
      </div> 
    </div> 
  ); 
} 
