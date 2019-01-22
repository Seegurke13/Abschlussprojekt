<?php


namespace App\Manipulator\JQuery;


use DOMWrap\Document;
use Hoa\Visitor\Element;
use Hoa\Visitor\Visit;

class JQueryVisitor implements Visit
{

    /**
     * Visit an element.
     *
     * @param   \Hoa\Visitor\Element $element Element to visit.
     * @param   Document                &$handle Handle (reference).
     * @param   mixed $eldnah Handle (not reference).
     * @return  mixed
     */
    public function visit(Element $element, &$handle = null, $eldnah = null)
    {
        switch ($element->getId()) {
            case '#expresssion':
                foreach ($element->getChildren() as $e => $child) {
                    $child->accept($this, $handle, $eldnah);
                }

                return $eldnah;
                break;
            case '#find':
                $child = $element->getChildren()[0];
                $arguments = $child->accept($this);

                $handle = call_user_func_array([$eldnah, 'find'], $arguments);
                break;
            case '#command':
                $arguments = [];
                $commandName = '';
                foreach ($element->getChildren() as $e => $child) {
                    if ($child->getId() === 'token' && $child->getValue()['token'] === 'identifier'){
                        $commandName = $child->getValue()['value'];
                    } elseif ($child->getId() === '#arguments') {
                        $arguments = $child->accept($this);
                    }
                }
                $handle = call_user_func_array([$handle, $commandName], $arguments);
                break;
            case '#arguments':
                $arguments = [];
                foreach ($element->getChildren() as $e => $child) {
                    $arguments[] = $child->getValue()['value'];
                }
                return $arguments;
        }
    }
}