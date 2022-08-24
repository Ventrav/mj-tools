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
        Schema::create('attributes', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->string("name",150);
            $table->string("options", "750")->nullable();
            $table->string("flg_cs_searchable",1);
            $table->string("flg_list_searchable",1);
            $table->string("flg_cs_displayable",1);
            $table->string("flg_list_displayable",1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attributes');
    }
};
