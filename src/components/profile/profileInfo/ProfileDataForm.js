import {createField, Input, Textarea} from '../../common/formsControl/FormsControls';
import {reduxForm} from 'redux-form';
import style from "../../common/formsControl/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) =>{
    return   <form onSubmit={handleSubmit}>  
                    <div>
                        <button>save</button>
                    </div>
                    
                    {error && <div className={style.formSummaryError}>
                    {error}
                    </div>}
                    
                    
                    <div>
                        fullName: {createField("Full Name", "fullName", [], Input)} 
                    </div>
                    <div>
                        Looking for a job: {createField('', 'lookingForAJob', [], Input, {type: "checkbox"})}
                    </div>
                    <div>
                        My professional skills: 
                        {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                    </div>
                    <div>
                        About me: 
                        {createField('About me', 'aboutme', [], Textarea)}
                    </div>
                    <div>
                        Contact: {Object.keys(profile.contacts).map(key => {
                            return <div key={key} className=''> 
                                        {key}: {createField(key, 'contacts.'+ key, [], Input)}
                                   </div>
                        })}
                    </div>
            </form>
    }

    const ProfileDataReduxForm = reduxForm({
        form: "edit-profile"
    })(ProfileDataForm);

    export default ProfileDataReduxForm;