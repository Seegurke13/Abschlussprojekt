<?php
declare(strict_types=1);


namespace App\Manipulator\Css;


use Hoa\Visitor\Element;
use Hoa\Visitor\Visit;
use Symfony\Component\DomCrawler\Crawler;

class CssVisitor implements Visit
{

    /**
     * Visit an element.
     *
     * @param   \Hoa\Visitor\Element $element Element to visit.
     * @param   Crawler              &$handle Handle (reference).
     * @param   mixed $eldnah Handle (not reference).
     * @return  mixed
     */
    public function visit(Element $element, &$handle = null, $eldnah = null)
    {
        switch ($element->getId()) {
            case '#expression':
                $selector = $element->getChild(0)->accept($this)['value'];
                $action = $element->getChild(1)->accept($this)['value'];
                $this->handleAction($handle, $action, $selector);
                break;
            case '#selector':
                return $element->getChildren()[0]->getValue();
                break;
            case '#action':
                return $element->getChildren()[0]->getValue();
                break;
        }
    }

    private function handleAction(&$handle, $action, $selector): void
    {
        switch ($action) {
            case 'crop':
                $handle = $handle->filter($selector);
                break;
            case 'remove':
                $handle->filter($selector)->each(function (Crawler $crawler) {
                    foreach ($crawler as $node) {
                        $node->parentNode->removeChild($node);
                    }
                });
                break;
        }
    }
}