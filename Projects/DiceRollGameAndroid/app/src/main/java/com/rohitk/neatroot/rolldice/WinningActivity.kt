package com.rohitk.neatroot.rolldice

import android.content.Intent
import android.graphics.Bitmap
import android.graphics.Canvas
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.core.content.FileProvider
import com.rohitk.neatroot.rolldice.databinding.ActivityWinningBinding
import java.io.File
import java.io.FileOutputStream

class WinningActivity : AppCompatActivity() {
    val binding: ActivityWinningBinding by lazy {
        ActivityWinningBinding.inflate(layoutInflater)
    }
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(binding.root)

        val winner = intent.getStringExtra("winner")
        binding.winnertxt.text = "The Winner is \n ${winner}"
        binding.confetti.visibility = View.VISIBLE
        animateDice(binding)



        binding.sharetxt.setOnClickListener {
            binding.sharetxt.visibility = View.INVISIBLE
            //genrate bitmap
            val screenshotBitmap = getBitmapFromView(binding.rootview)
            // Create an Intent to share the screenshot
            val shareIntent = Intent(Intent.ACTION_SEND).apply {
                type = "image/jpeg" // Set the MIME type for the image (you can adjust as needed)
                val imageUri = getImageUriFromBitmap(screenshotBitmap) // Convert Bitmap to Uri
                putExtra(Intent.EXTRA_STREAM, imageUri) // Attach the image Uri as an extra
                putExtra(Intent.EXTRA_TEXT, "Playing Dice Roll Game \nMade by me to decides our fate🎊😊") // Add your text data here

            }
            // Start the sharing activity
            startActivity(Intent.createChooser(shareIntent, "Share Screenshot"))
            binding.sharetxt.visibility = View.VISIBLE
        }

    }

    private fun getBitmapFromView(view:View) :Bitmap {
        // Create a Bitmap with the same dimensions as the rootView
        val screenshotBitmap = Bitmap.createBitmap(view.width, view.height, Bitmap.Config.ARGB_8888)
        // Create a Canvas with the Bitmap
        val canvas = Canvas(screenshotBitmap)

        val bg = view.background
        bg.draw(canvas)
        // Draw the rootView onto the Canvas
        view.draw(canvas)
        return screenshotBitmap
    }

    // Function to convert Bitmap to Uri
    private  fun getImageUriFromBitmap(bitmap: Bitmap): Uri {
        val imageFile = File(applicationContext.filesDir, "screenshots.jpg")
        val fos = FileOutputStream(imageFile)
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, fos)
        fos.flush()
        fos.close()
        return FileProvider.getUriForFile(applicationContext, "com.rohitk.neatroot.rolldice.fileProvider", imageFile)
    }

    private fun animateDice(binding:ActivityWinningBinding ) {
        binding.diceimage.animate().apply {
            duration = 10000
            rotation(720f)
        }.withEndAction {
            binding.diceimage.animate().apply {
                duration = 10000
                rotation(-360f)
            }
        }
    }



}