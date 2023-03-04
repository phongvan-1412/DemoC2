var express = require('express');
var router = express.Router();

const account_controller = require('../controllers/account_controller');
const category_controller = require('../controllers/category_controller');
const stacks_controller = require('../controllers/stacks_controller');
const posts_controller = require('../controllers/posts_controller');
const comments_controller = require('../controllers/comments_controller');

const sql = require('mssql/msnodesqlv8');
const config = require('../models/config');

//Account
router.post('/addaccount', new account_controller().postAddAccount);
router.post('/updatepassword', new account_controller().postChangePassword);
router.post('/updateaccinfo', new account_controller().postUpdateAccInfo);
router.post('/updateaccimg', new account_controller().postUpdateAccImage);
router.post('/loginData', new account_controller().postLoginData);

router.get('/api', function (req, res) {
  var sqlString = "SELECT * from account";

  sql.connect(config, function (err) {
    console.log("Finished setting the isolation level to read committed");
    if (err) console.log(err);
    var request = new sql.Request();
    try {
      request.query(sqlString, function (err, result) {
        if (err) {
          res.json(err)
        } else {
          res.json(result)
        }
      });
    } catch (err) {
      console.error("Error occurred while get all category: ", err);
      //conn.rollback();
      console.info("Rollback successful");
      return "error creating order";
    }
  });

  // var fs = require('fs')
  //   , filename = './dumb.text';
  // fs.readFile(filename, 'utf8', function (err, data) {
  //   if (err) throw err;
  //   console.log('OK: ' + filename);
  //   res.json(JSON.parse(data))
  // });
})

//Category
router.post('/addcate', new category_controller().postAddCate);
router.post('/updatecate', new category_controller().postUpdateCate);
router.post('/updatecatestatus', new category_controller().postUpdateCateStatus);
router.get('/category', new category_controller().getCate);

//Stacks
router.post('/addstacks', new stacks_controller().postAddStacks);
router.post('/updatestacks', new stacks_controller().postUpdateStacks);
router.get('/getallstacks', new stacks_controller().getAllStacks);
router.get('/getstackstatistic', new stacks_controller().getStackStatistic);
router.get('/getlinechart', new stacks_controller().getLineChart);


//Posts
router.post('/addposts', new posts_controller().postAddPosts);
router.get('/getallposts', new posts_controller().getAllPosts);
router.get('/getfreeposts', new posts_controller().getFreePosts);
router.get('/getreceiptpost', new posts_controller().getReceiptPosts);
router.get('/gettippost', new posts_controller().getTipPosts);
router.get('/getcontestpost', new posts_controller().getContestPosts);


//Comments
router.post('/addcomments', new comments_controller().postComment);
router.post('/addsubcomments', new comments_controller().postSubComment);
router.post('/updatecmtcount', new comments_controller().postUpdateCommentCount);
router.get('/getcomments', new comments_controller().getComment);
router.get('/gettop5comments', new comments_controller().getTop5Comment);
router.get('/getmostcomment', new comments_controller().getMostComment);


module.exports = router;
