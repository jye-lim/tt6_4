from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import Length, EqualTo, Email, DataRequired, ValidationError
from webapp.models import User

class RegisterForm(FlaskForm):

    def validate_username(self, username_to_check): 
        user = User.query.filter_by(username=username_to_check.data).first()
        if user: 
            raise ValidationError('Email address already exists! Please use a different username.')

    def validate_email_address(self, email_address_to_check): 
        email_address = User.query.filter_by(username=email_address_to_check.data).first()
        if email_address: 
            raise ValidationError('Email address already exists! Please use a different email.')

    username = StringField(label='Username', validators=[Length(min=4, max=16), DataRequired()])
    name = StringField(label='Name', validators=[Length(min=1, max=128)])
    password1 = PasswordField(label='Password', validators=[Length(min=6), DataRequired()])
    password2 = PasswordField(label='Confirm Password', validators=[EqualTo('password1'), DataRequired()])
    submit = SubmitField(label='Create Account')

class LoginForm(FlaskForm): 
    username = StringField(label='Username', validators=[DataRequired()])
    password = PasswordField(label='Password', validators=[DataRequired()])
    submit = SubmitField(label='Login')
    