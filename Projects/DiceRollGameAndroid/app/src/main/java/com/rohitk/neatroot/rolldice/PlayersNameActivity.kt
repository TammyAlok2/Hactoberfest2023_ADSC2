package com.rohitk.neatroot.rolldice

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.rohitk.neatroot.rolldice.databinding.ActivityMainBinding
import com.rohitk.neatroot.rolldice.databinding.ActivityPlayersNameBinding

class PlayersNameActivity : AppCompatActivity() {
    private val binding : ActivityPlayersNameBinding by lazy {
        ActivityPlayersNameBinding.inflate(layoutInflater)
    }
    private lateinit var playerone :String
    private lateinit var playertwo :String
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)



        binding.playbtn.setOnClickListener {
            playerone = binding.playeroneEdt.text.toString().trim().takeIf { it.isNotBlank() } ?: "Player 1"
            playertwo = binding.playertwoEdt.text.toString().trim().takeIf { it.isNotBlank() } ?: "Player 2"

            Log.i("TAG", "onplayer activitu"+playerone+":"+playertwo)

            val intent = Intent(this@PlayersNameActivity,MainActivity::class.java)
                .putExtra("player1",playerone)
                .putExtra("player2",playertwo)
            startActivity(intent)

        }
    }
}