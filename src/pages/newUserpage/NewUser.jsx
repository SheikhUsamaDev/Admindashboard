import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newusertitle">New Users</h1>
        <form  className="newuserform">
            <div className="newuseritem">
                <label>Username</label>
                <input type="text"
                placeholder="John"
                className="newuserinput" />
            </div>
            <div className="newuseritem">
                <label>Full Name</label>
                <input type="text"
                placeholder="John Smith"
                className="newuserinput" />
            </div>
            <div className="newuseritem">
                <label>Email</label>
                <input type="email"
                placeholder="Johnsmith@gmail.com"
                className="newuserinput" />
            </div>
            <div className="newuseritem">
                <label>Password</label>
                <input type="password"
                placeholder="password"
                className="newuserinput" />
            </div>
            <div className="newuseritem">
                <label>Phone</label>
                <input type="text"
                placeholder="+1 455 265 22"
                className="newuserinput" />
            </div>
            <div className="newuseritem">
                <label>Address</label>
                <input type="text"
                placeholder="America"
                className="newuserinput" />
            </div>
            <div className="newuseritem">
            <label>Gender</label>
            <div className="newusergender">
                <input type="radio" name="gender" id="male" value="male" className="newuserinput" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" className="newuserinput" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" className="newuserinput" />
                <label for="other">Other</label>
              </div>
            </div>
            <div className="newuseritem">
                <label>Active</label>
                <select className="newuserselect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                 </select>
            </div>
         </form>
        <button className="newuserbuttons">Create</button>
      
    </div>
  )
}
