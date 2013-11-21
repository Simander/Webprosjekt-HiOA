<script src="/easter_implementation.js"></script>
<div id="kontakt_skjema">
  <form action="mailform.php" method="post">
  
  <div id="group"> <p class="mail_form" id="e-post_navn">
  Navn:<br /><input type="text" name="navn" size="20" maxlength="50" tabindex="1" />
  </p>
 
  <p class="mail_form" id="e-post_epost">
  E-post:<br /><input type="text" name="epost" size="20" maxlength="50" tabindex="2" />
  </p>
  </div>

<div id="hidden_shell">
 <img id="shell_img" width="240" height="150" src="bilder/mixer.jpg">
 <div id="easter_object"></div>
</div>
 
 <p class="mail_form" id="e-post_melding">Melding:<br />
 <textarea cols="72" rows="10" name="tekst" tabindex="3" class="e-post_melding">
 </textarea><br />
  
 <input type="submit" name="submit" value="Send" tabindex="4" class="epost_knapp" />
 <input type="reset" name="reset" value="Slett" tabindex="5" class="epost_knapp" />
 
</form>
</div>



