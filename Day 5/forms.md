1. Structure of the forms

<form action="http://www.example.com/login.php" method="get"></form>

2. Text Input
<form action="#">
  <p>
    Username:
    <input type="text" name="username" size="15" maxlength="30" />
  </p>
</form>

3. Password Input
<form action="http://www.example.com/login.php">
  <p>
    Username:
    <input type="text" name="username" size="15" maxlength="30" />
  </p>
  <p>
    Password:
    <input type="password" name="password" size="15" maxlength="30" />
  </p>
</form>

4. Text Area
   <form action="http://www.example.com/comments.php">
   <p>What did you think of this gig?</p>
   <textarea name="comments" cols="20" rows="4">
   Enter your comments...</textarea
         >
   </form>

5. Radio Button
<form action="http://www.example.com/profile.php">
  <p>
    Please select your favorite genre:
    <br />
    <input type="radio" name="genre" value="rock" checked="checked" /> Rock
    <input type="radio" name="genre" value="pop" />
    Pop
    <input type="radio" name="genre" value="jazz" />
    Jazz
  </p>
</form>

6. Checkbox
<form action="http://www.example.com/profile.php">
  <p>
    Please select your favorite genre:
    <br />
    <input type="checkbox" name="genre" value="rock" checked="checked" />
    Rock
    <input type="checkbox" name="genre" value="pop" />
    Pop
    <input type="checkbox" name="genre" value="jazz" />
    Jazz
  </p>
</form>

7. DropDown List
<form action="http://www.example.com/profile.php">
  <p>What device do you listen to music on?</p>
  <select name="devices">
    <option value="ipod">iPod</option>
    <option value="radio">Radio</option>
    <option value="computer">Computer</option>
  </select>
</form>

8. Multiple Select Option
<form action="http://www.example.com/profile.php">
    <p>What device do you listen to music on?</p>
    <select name="devices" multiple="multiple">
      <option value="ipod">iPod</option>
      <option value="radio">Radio</option>
      <option value="computer">Computer</option>
    </select>
  </form>

9. File Upload
  <form action="http://www.example.com/upload.php" method="post">
    <p>Upload your song in MP3 format:</p>
    <input type="file" name="user-song" /><br /> <input type="submit" value="Upload" />
    </form>

10. Submit Option
    <form action="http://www.example.com/subscribe.php"> <p>Subscribe to our email list:</p>
        <input type="text" name="email" />
        <input type="submit" name="subscribe"
            value="Subscribe" />
        </form>

11. Submit Option with image

     <form action="http://www.example.org/subscribe.php"> <p>Subscribe to our email list:</p>
            <input type="text" name="email" />
            <input type="image" src="images/img4.jpg"
                width="100" height="20" />
    </form>
