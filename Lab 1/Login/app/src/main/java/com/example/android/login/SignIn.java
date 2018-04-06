package com.example.android.login;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class SignIn extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_in);
    }

    public void signInManual(View view) {
        Intent redirect = new Intent(SignIn.this, SignInManual.class);
        startActivity(redirect);

    }

    public void signInFacebook(View view) {
        Intent redirect = new Intent(SignIn.this, FacebookSignIn.class);
        startActivity(redirect);

    }

    public void signInForegetPassword(View view) {
        Intent redirect = new Intent(SignIn.this, ForgetPassword.class);
        startActivity(redirect);

    }

    public void checkCredentials(View v) {
        Intent redirect = new Intent(SignIn.this, MainActivity.class);
        startActivity(redirect);
    }


}
