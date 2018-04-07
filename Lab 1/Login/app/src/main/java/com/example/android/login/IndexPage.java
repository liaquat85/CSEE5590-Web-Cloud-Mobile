package com.example.android.login;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class IndexPage extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_index_page);
    }

    public void backHome(View v) {
        Intent redirect = new Intent(IndexPage.this, MainActivity.class);
        startActivity(redirect);
    }
}
