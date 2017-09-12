(function(window, undefined) {
  var dictionary = {
    "106e12c9-fc2d-4ad2-9a19-fc2d45765a3e": "图片上传（photo_load）",
    "3372d9aa-afd7-4f79-b380-dbda46cdecf9": "找回密码（password_find）",
    "c947e149-7720-4cfa-80b3-ea299a48d331": "头像图片拍摄（userphoto_take）",
    "1750e58c-c2dd-49bd-8367-895b66a15747": "图片选择（photo_choose）",
    "64e0c8bd-94b8-4296-83da-277dbcafb022": "图片预览（photo_preview）",
    "a749bc95-9891-4907-a0ef-7c7caa8beec0": "截图相册（album_cut）",
    "fe7921ed-cec5-4fd2-9dd3-c80c0695a58d": "上传列表（upload_list）",
    "10eede6c-7b7b-4579-ab25-c49a2de2bcfb": "种植详细图片（product_photo_big）",
    "473b9406-a927-4de2-9601-b3ed0fb402dc": "消息内容（message_detail）",
    "bfb1ccda-9a84-4839-b853-40133b62bb7f": "头像查看（userphoto_view）",
    "50c939f2-61ac-4ee8-bcbc-fb0d8006c039": "意见反馈（feedback）",
    "8a638ee1-d936-47c6-b4d7-1fa17ca84294": "种植品种（product）",
    "bb76cf41-ec96-49aa-ab92-c231419b50ad": "种植图片查看（plantphoto_view）",
    "131e0aa3-ec76-40cb-b641-12bfbe12b267": "用户中心（user_center）",
    "e0efbf8a-6d1f-4567-9add-cf7f4d1a561d": "头像拍照完成（userphoto_complete）",
    "33e38b3a-437b-470d-a827-5f3e81c0b78a": "登录过渡（login screen）",
    "621f3efa-5744-4b70-89a8-67a913bfde4b": "关于家庭农场（about_us）",
    "dce32422-9eb4-4244-a8e4-7181545f268f": "种植表现（plant_show）",
    "fadb47cd-9f96-4c17-a44c-4e166ce66280": "拍照完成（photo_complete）",
    "ba0d90ad-0af3-4b3d-84bd-d45e17d37688": "消息中心（message）",
    "326dc7e2-9da9-4015-9e63-b38aef8fa719": "引导页（introduction）",
    "8968bbcb-9f77-4386-a044-f35f845331af": "头像选择（userphoto_choose）",
    "d6be4add-9e41-4693-bc41-23a6f09a159a": "用户信息（user_info）",
    "366464d9-ce89-44c1-b060-5071f783799d": "index",
    "af67ec2e-be10-4046-ad6f-a2637ce551ca": "截图选择（cutphoto_choose）",
    "c11eb572-e505-44f2-8da7-5e503d8e515d": "头像相册（album_user）",
    "bb053206-abe2-46c2-837e-66201ed17682": "密码修改（password_modify）",
    "95adc887-3e85-4566-95d6-d7b6077c8c85": "登录（login）",
    "bf23cc53-0c3c-4123-9ddb-b6a3977d84e2": "打电话页面",
    "f559e6e7-1ac4-439d-8e74-71daf362aa10": "种植图片（album_plant）",
    "c2162ffe-5891-4799-ae84-29ba8d518269": "相册（album）",
    "1588507a-88d5-4b90-863c-c9fc80d51034": "品种选择（product-choose）",
    "70bb128e-46f2-4626-8d71-4815e1caf146": "等待页面（Loading screen）",
    "426b1750-32da-4f0d-806d-ddbe8f835159": "图片拍摄（photo_take）",
    "9abbd33e-7e20-439e-89fd-57fd62c47a93": "搜索（search）",
    "1f6b2e0b-5329-4008-bebb-251073969097": "用户详细信息（user_info_detail）",
    "b959afc5-9060-455c-84ef-0b8ed3d7ed77": "位置选择（location-choose）",
    "4a9e90a5-8703-4e73-8307-e60196e14415": "Template3",
    "f28dbe83-0bf6-4226-92ef-825c6a07ae8d": "Template 2",
    "1e8a452c-0c3e-434b-9a69-9f88c989dab1": "Template 1",
    "1b9f4c36-f373-4c76-a3ee-d4b679872379": "navigator",
    "default": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);