package com.example.android.login;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void signIn(View view) {
        Intent redirect = new Intent(MainActivity.this, SignIn.class);
           startActivity(redirect);

    }

    public void signUp(View view) {
        Intent redirect = new Intent(MainActivity.this, SignUp.class);
           startActivity(redirect);

    }




}
