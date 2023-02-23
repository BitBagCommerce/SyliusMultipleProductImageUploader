
# BitBag SyliusMultipleProductImageUploader

----

At BitBag we do believe in open source. However, we are able to do it just because of our awesome clients, who are kind enough to share some parts of our work with the community. Therefore, if you feel like there is a possibility for us working together, feel free to reach us out. You will find out more about our professional services, technologies and contact details at [https://bitbag.io/](https://bitbag.io/contact-us/?utm_source=github&utm_medium=referral&utm_campaign=plugins_multiple_upload).

# Table of Content

***

* [Overview](#overwiev)
* [Support](#we-are-here-to-help)
* [Installation](#installation)
    * [Testing](#testing)
    * [Customization](#Customization)
* [About us](#about-us)
    * [Community](#community)
* [Demo Sylius shop](#demo-sylius-shop)
* [Additional Sylius resources for developers](#additional-resources-for-developers)
* [License](#license)
* [Contact](#contact)

# Overview

----
This plugin allows you to integrate multiple upload images to products with dropzone features with Sylius platform app.


## We are here to help
This **open-source plugin was developed to help the Sylius community** and make Mollie payments platform available to any Sylius store. If you have any additional questions, would like help with installing or configuring the plugin or need any assistance with your Sylius project - let us know!

[![](https://bitbag.io/wp-content/uploads/2020/10/button-contact.png)](https://bitbag.io/contact-us/?utm_source=github&utm_medium=referral&utm_campaign=plugins_multiple_upload
)

## About us

At BitBag we do believe in open source. However, we are able to do it just beacuse of our awesome clients, who are kind enough to share some parts of our work with the community. Therefore, if you feel like there is a possibility for us working together, feel free to reach us out. You will find out more about our professional services, technologies and contact details at https://bitbag.io/.

## Installation
```bash
$ composer require bitbag/sylius-multiple-product-image-uploader
```

Import required config in your `config/packages/_sylius.yaml` file:
```yaml
# config/packages/_sylius.yaml

imports:
    ...
    
    - { resource: "@BitBagSyliusMultipleProductImageUploader/Resources/config/services.xml" }
```


Add traits to your Customer entity class, when You don't use annotation.

```php
<?php

declare(strict_types=1);

namespace App\Entity\Product;

use BitBag\SyliusMultipleProductImageUploader\Entity\Product\ProductInterface;
use BitBag\SyliusMultipleProductImageUploader\Entity\Product\ProductTrait;
use Sylius\Component\Core\Model\Product as BaseProduct;

class Product extends BaseProduct implements ProductInterface
{
    use ProductTrait;
}
```

Or this way if you use annotations:

```php
<?php

declare(strict_types=1);

namespace App\Entity\Product;

namespace Tests\BitBag\SyliusMultipleProductImageUploader\Entity\Product;

use BitBag\SyliusMultipleProductImageUploader\Entity\Product\ProductInterface;
use BitBag\SyliusMultipleProductImageUploader\Entity\Product\ProductTrait;
use Sylius\Component\Core\Model\Product as BaseProduct;

/**
* @ORM\Entity 
* @ORM\Table(name="sylius_product")
*/
class Product extends BaseProduct implements ProductInterface
{
    use ProductTrait;
    
    /**
    * @var array
    * @ORM\Column(type="string", nullable=true)
    */   
    protected $file;
}
```

If you don't use annotations, define new Entity mapping inside your src/Resources/config/doctrine directory.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<doctrine-mapping xmlns="http://doctrine-project.org/schemas/orm/doctrine-mapping"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xsi:schemaLocation="http://doctrine-project.org/schemas/orm/doctrine-mapping
                                  http://doctrine-project.org/schemas/orm/doctrine-mapping.xsd"
                  xmlns:gedmo="http://gediminasm.org/schemas/orm/doctrine-extensions-mapping"
>
    <entity name="App\Entity\Product\Product" table="sylius_product">
    </entity>
</doctrine-mapping>
```

Create also interface, which is implemented by customer entity

```php
<?php

namespace App\Entity\Customer;

use BitBag\SyliusMultipleProductImageUploader\Entity\Product\ProductInterface as BitBagProductInterface;

interface ProductInterface extends BitBagProductInterface
{
}
```
Override Customer resource:

```yaml
# config/packages/_sylius.yaml
...

sylius_product:
  resources:
    product:
      classes:
        model: Tests\BitBag\SyliusMultipleProductImageUploader\Entity\Product\Product
```

**Note:** If you are running it on production, add the `-e prod` flag to this command.

## Customization

### Available services you can [decorate](https://symfony.com/doc/current/service_container/service_decoration.html) and forms you can [extend](http://symfony.com/doc/current/form/create_form_type_extension.html)

Run the below command to see what Symfony services are shared with this plugin:
```bash
$ bin/console debug:container | grep bitbag_sylius_multiple_product_image_uploader
```

## Testing
```bash
$ composer install
$ cd tests/Application
```

Copy `package.json.~1.xx.dist` file to `package.json` for specific version of Sylius (example for 1.12.0):
```bash
$ cp package.json.\~1.12.dist package.json
```

Then:

```bash
$ yarn install
$ yarn build
$ bin/console assets:install public -e test
$ bin/console doctrine:schema:create -e test
$ bin/console server:run 127.0.0.1:8080 -d public -e test
$ open http://localhost:8080
$ cd ../..
$ vendor/bin/behat
$ vendor/bin/phpspec run
```

# About us

---

BitBag is an agency that provides high-quality **eCommerce and Digital Experience software**. Our main area of expertise includes eCommerce consulting and development for B2C, B2B, and Multi-vendor Marketplaces.
The scope of our services related to Sylius includes:
- **Consulting** in the field of strategy development
- Personalized **headless software development**
- **System maintenance and long-term support**
- **Outsourcing**
- **Plugin development**
- **Data migration**

Some numbers regarding Sylius:
* **20+ experts** including consultants, UI/UX designers, Sylius trained front-end and back-end developers,
* **100+ projects** delivered on top of Sylius,
* Clients from  **20+ countries**
* **3+ years** in the Sylius ecosystem.

---

If you need some help with Sylius development, don't be hesitate to contact us directly. You can fill the form on [this site](https://bitbag.io/contact-us/?utm_source=github&utm_medium=referral&utm_campaign=plugins_multiple_upload) or send us an e-mail to hello@bitbag.io!

---

[![](https://bitbag.io/wp-content/uploads/2020/10/badges-sylius.png)](https://bitbag.io/contact-us/?utm_source=github&utm_medium=referral&utm_campaign=plugins_multiple_upload)

## Community

----
For online communication, we invite you to chat with us & other users on [Sylius Slack](https://sylius-devs.slack.com/).

# Demo Sylius shop

---

We created a demo app with some useful use-cases of plugins!
Visit b2b.bitbag.shop to take a look at it. The admin can be accessed under b2b.bitbag.shop/admin/login link and sylius: sylius credentials.
Plugins that we have used in the demo:

| BitBag's Plugin | GitHub | Sylius' Store|
| ------ | ------ | ------|
| ACL Plugin | *Private. Available after the purchasing.*| https://plugins.sylius.com/plugin/access-control-layer-plugin/|
| Braintree Plugin | https://github.com/BitBagCommerce/SyliusBraintreePlugin |https://plugins.sylius.com/plugin/braintree-plugin/|
| CMS Plugin | https://github.com/BitBagCommerce/SyliusCmsPlugin | https://plugins.sylius.com/plugin/cmsplugin/|
| Elasticsearch Plugin | https://github.com/BitBagCommerce/SyliusElasticsearchPlugin | https://plugins.sylius.com/plugin/2004/|
| Mailchimp Plugin | https://github.com/BitBagCommerce/SyliusMailChimpPlugin | https://plugins.sylius.com/plugin/mailchimp/ |
| Multisafepay Plugin | https://github.com/BitBagCommerce/SyliusMultiSafepayPlugin |
| Wishlist Plugin | https://github.com/BitBagCommerce/SyliusWishlistPlugin | https://plugins.sylius.com/plugin/wishlist-plugin/|
| **Sylius' Plugin** | **GitHub** | **Sylius' Store** |
| Admin Order Creation Plugin | https://github.com/Sylius/AdminOrderCreationPlugin | https://plugins.sylius.com/plugin/admin-order-creation-plugin/ |
| Invoicing Plugin | https://github.com/Sylius/InvoicingPlugin | https://plugins.sylius.com/plugin/invoicing-plugin/ |
| Refund Plugin | https://github.com/Sylius/RefundPlugin | https://plugins.sylius.com/plugin/refund-plugin/ |

**If you need an overview of Sylius' capabilities, schedule a consultation with our expert.**

[![](https://bitbag.io/wp-content/uploads/2020/10/button_free_consulatation-1.png)](https://bitbag.io/contact-us/?utm_source=github&utm_medium=referral&utm_campaign=plugins_multiple_upload)

## Additional resources for developers

---
To learn more about our contribution workflow and more, we encourage ypu to use the following resources:
* [Sylius Documentation](https://docs.sylius.com/en/latest/)
* [Sylius Contribution Guide](https://docs.sylius.com/en/latest/contributing/)
* [Sylius Online Course](https://sylius.com/online-course/)

## License

---

This plugin's source code is completely free and released under the terms of the MIT license.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen.)

## Contact

---
If you want to contact us, the best way is to fill the form on [our website](https://bitbag.io/contact-us/?utm_source=github&utm_medium=referral&utm_campaign=plugins_multiple_upload) or send us an e-mail to hello@bitbag.io with your question(s). We guarantee that we answer as soon as we can!

[![](https://bitbag.io/wp-content/uploads/2020/10/footer.png)](https://bitbag.io/contact-us/?utm_source=github&utm_medium=referral&utm_campaign=plugins_multiple_upload)