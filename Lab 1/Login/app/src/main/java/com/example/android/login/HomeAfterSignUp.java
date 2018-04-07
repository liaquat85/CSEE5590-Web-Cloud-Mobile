package com.example.android.login;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class HomeAfterSignUp extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_after_sign_up);

        TextView textView2 = (TextView)findViewById(R.id.textView2);
        textView2.setText("Signup Complete. Click Home Button");
    }

    public void backHome(View v) {
        Intent redirect = new Intent(HomeAfterSignUp.this, MainActivity.class);
        startActivity(redirect);
    }
}
