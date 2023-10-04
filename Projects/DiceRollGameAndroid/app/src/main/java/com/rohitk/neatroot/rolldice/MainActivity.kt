package com.rohitk.neatroot.rolldice

import android.content.Intent
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewPropertyAnimator
import android.widget.Toast
import androidx.core.content.ContextCompat
import com.google.android.material.snackbar.Snackbar
import com.rohitk.neatroot.rolldice.databinding.ActivityMainBinding
import kotlin.random.Random

class MainActivity : AppCompatActivity() {

    private val binding : ActivityMainBinding by lazy {
        ActivityMainBinding.inflate(layoutInflater)
    }
    private var currentPlayer  = 1
    private var playerOneScore = 0
    private var playerTwoScore = 0
    private var target =0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        binding.dice.setImageResource(R.drawable.dice_0)
        val playerone: String = intent.getStringExtra("player1") ?: "Player 1"
        val playertwo :String= intent.getStringExtra("player2") ?: "Player 2"

        Log.i("TAG", "onCreate: "+playerone+playertwo)
        binding.playeronename.text = playerone
        binding.playertwoname.text = playertwo
        setTarget()

        binding.rollbtn.setOnClickListener {
            if (!isTargetSet()) {
                return@setOnClickListener
            }
            it.isEnabled = false
            it.isClickable = false
            animateScore(binding.playeronescore.takeIf { currentPlayer ==1 } ?: binding.playertwoscore)
            animateDice()
                .withEndAction {
                    it.isEnabled = true
                    it.isClickable = true
                    val random = Random.nextInt(6) + 1

                    val drawableResource = when (random) {
                        1 -> R.drawable.dice_1
                        2 -> R.drawable.dice_2
                        3 -> R.drawable.dice_3
                        4 -> R.drawable.dice_4
                        5 -> R.drawable.dice_5
                        6 -> R.drawable.dice_6
                        else -> R.drawable.dice_0
                    }

                    binding.dice.setImageResource(drawableResource)


                    //update score player base on current player
                    if (currentPlayer == 1) {
                        playerOneScore += random
                        binding.playeronescore.text = playerOneScore.toString()
                        binding.playertwoname.setTextColor(
                            ContextCompat.getColor(
                                this@MainActivity,
                                R.color.white
                            )
                        )
                        binding.playertwoscore.setTextColor(
                            ContextCompat.getColor(
                                this@MainActivity,
                                R.color.white
                            )
                        )
                        binding.playeronename.setTextColor(Color.DKGRAY)
                        binding.playeronescore.setTextColor(Color.DKGRAY)
                        currentPlayer = 2
                    } else {
                        playerTwoScore += random
                        binding.playertwoscore.text = playerTwoScore.toString()
                        binding.playeronename.setTextColor(
                            ContextCompat.getColor(
                                this@MainActivity,
                                R.color.white
                            )
                        )
                        binding.playeronescore.setTextColor(
                            ContextCompat.getColor(
                                this@MainActivity,
                                R.color.white
                            )
                        )
                        binding.playertwoname.setTextColor(Color.DKGRAY)
                        binding.playertwoscore.setTextColor(Color.DKGRAY)
                        currentPlayer = 1
                    }


                    //check if any player has reached the  winning scroe
                    val winningScore = target
                    var intent = Intent(this@MainActivity, WinningActivity::class.java)
                    if (playerOneScore >= winningScore) {
                        intent.putExtra("winner", playerone)
                        startActivity(intent)
                        finish()
                    } else if (playerTwoScore >= winningScore) {
                        intent.putExtra("winner", playertwo)
                        startActivity(intent)
                        finish()
                    }


                }
        }
    }

    private fun animateDice() :ViewPropertyAnimator{
        binding.dice.animate().apply {
            duration = 1000
            rotationYBy(1800f)
            return this
        }
//            .withEndAction {
//            binding.dice.animate().apply {
//                duration = 500
//                rotationYBy(3600f)
//
//            }
//        }
    }
    private fun animateScore(v :View){
        v.animate().apply {
            duration= 1000
            rotationYBy(1800f)
        }
    }

    private fun isTargetSet(): Boolean {
        if(binding.targettxt.text.toString().trim().toInt() <= 0 ){
            Toast.makeText(this@MainActivity,"Set The Target First ",Toast.LENGTH_SHORT).show()
            return false
        }
        return true
    }

    private fun setTarget() {
        binding.targetplus.setOnClickListener {
            target += 5
            binding.targettxt.text = target.toString()
        }
        binding.targetminus.setOnClickListener {
            if(target ==0){
                Snackbar.make(it,"Target Cant be Negative ",Snackbar.LENGTH_SHORT).show()
                return@setOnClickListener
            }
            target -= 5
            binding.targettxt.text = target.toString()
        }

    }
}