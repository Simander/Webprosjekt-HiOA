<script src="easter_implementation.js"></script>
<div id="kontakt_skjema">
<form action="mailfuck1.php" method="post">
<p id="e-post_navn">
Navn:<br /><input type="text" name="navn" size="20" maxlength="50" tabindex="1" />
</p>


 
<p id="e-post_epost">
E-post:<br /><input type="text" name="epost" size="20" maxlength="50" tabindex="2" />
</p>

<p id="epost_tlf">
	Tlf:<br/ ><input type="text" name"tlf" size="20" maxlength="50" tabindex="2" />
</p>


 
<p id="e-post_melding">Melding:<br />
<textarea cols="72" rows="10" name="tekst" tabindex="3" class="e-post_melding"> Skriv din melding her, så tar vi kontakt videre...
</textarea><br/>

<div id="hidden_shell">
 <img id="shell_img" width="240" height="150" src="bilder/mixer.jpg" alt="bilde av mikser">
 <div id="easter_object"></div>
</div>
 
<input type="submit" name="submit" value="Send" tabindex="4" class="epost_knapp" />
<input type="reset" name="reset" value="Slett" tabindex="5" class="epost_knapp" />
 
</form>
</div>



