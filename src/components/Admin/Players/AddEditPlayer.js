import React, { Component } from 'react';
import AdminLayout from '../../../hoc/AdminLayout';
import FormField from '../../UI/FormFields';
import { validate } from '../../UI/misc';
import Fileuploader from '../../UI/Fileuploader';
import { firebasePlayers, firebaseDB, firebase } from '../../../firebase';

class AddEditPlayer extends Component {
  state = {
    playerId: '',
    formType: '',
    formError: false,
    formSucces: '',
    defaultImg: '',
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          label: 'Player Name',
          name: 'name_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          label: 'Player Last Name',
          name: 'lastname_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
      number: {
        element: 'input',
        value: '',
        config: {
          label: 'Player Number',
          name: 'number_input',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
      position: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a position',
          name: 'select_position',
          type: 'select',
          options: [
            { key: 'Keeper', value: 'Keeper' },
            { key: 'Defence', value: 'Defence' },
            { key: 'Midfield', value: 'Midfield' },
            { key: 'Striker', value: 'Striker' }
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: '',
        showlabel: true
      },
      image: {
        element: 'image',
        value: '',
        validation: {
          required: true
        },
        valid: false
      }
    }
  };

  componentDidMount() {
    const playerId = this.props.match.params.id;
    if (!playerId) {
      // Add player
      this.setState({
        formType: 'Add Player'
      });
    } else {
      // Edit player
    }
  }

  updateForm = (element, content = '') => {
    // Copy formdata and update formdate
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };
    if (content === '') {
      newElement.value = element.event.target.value;
    } else {
      newElement.value = content;
    }
    // Update validation
    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    newFormdata[element.id] = newElement;
    // adding to state.
    this.setState({
      formdata: newFormdata,
      formError: false
    });
  };

  onSubmit = event => {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      // submit form
      if (this.state.formType === 'Edit player') {
        // Edit player
      } else {
        firebasePlayers
          .push(dataToSubmit)
          .then(() => {
            this.props.history.push('/admin_players');
          })
          .catch(error => {
            this.setState({
              formError: true
            });
          });
      }
    } else {
      this.setState({
        formError: true
      });
    }
  };

  resetImage = () => {
    const newFormdata = { ...this.state.formdata };
    newFormdata['image'].value = '';
    newFormdata['image'].valid = false;
    this.setState({
      defaultImg: '',
      formdata: newFormdata
    });
  };

  storeFilename = filename => {
    this.updateForm({ id: 'image' }, filename);
  };

  render() {
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={event => this.onSubmit(event)}>
              <Fileuploader
                dir="players"
                tag={'Player image'}
                defaultImg={this.state.defaultImg}
                defaultImgName={this.state.formdata.image.value}
                resetImage={() => this.resetImage()}
                filename={filename => this.storeFilename(filename)}
              />

              <FormField
                id={'name'}
                formdata={this.state.formdata.name}
                change={element => this.updateForm(element)}
              />
              <FormField
                id={'lastname'}
                formdata={this.state.formdata.lastname}
                change={element => this.updateForm(element)}
              />
              <FormField
                id={'number'}
                formdata={this.state.formdata.number}
                change={element => this.updateForm(element)}
              />
              <FormField
                id={'position'}
                formdata={this.state.formdata.position}
                change={element => this.updateForm(element)}
              />
              <div className="success_label">{this.state.formSuccess}</div>
              {this.state.formError ? (
                <div className="error_label">Something is wrong</div>
              ) : (
                ''
              )}
              <div className="admin_submit">
                <button onClick={event => this.onSubmit(event)}>
                  {this.state.formType}
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayer;
