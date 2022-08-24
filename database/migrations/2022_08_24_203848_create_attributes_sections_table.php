<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attributes_sections', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->unsignedBigInteger("id_attributes");
            $table->foreign("id_attributes")
                ->references("id")->on("attributes")
                ->onDelete("cascade")
                ->onUpdate("cascade");
            $table->unsignedBigInteger("id_sections");
            $table->foreign("id_sections")
                ->references("id")->on("sections")
                ->onDelete("cascade")
                ->onUpdate("cascade");
            $table->string("name", 50);
            $table->unsignedBigInteger("row_number");
            $table->unsignedBigInteger("length");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attributes_sections');
    }
};
