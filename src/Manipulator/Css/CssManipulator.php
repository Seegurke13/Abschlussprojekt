<?php
declare(strict_types=1);


namespace App\Manipulator\Css;


use App\Manipulator\AbstractManipulator;
use Symfony\Component\DomCrawler\Crawler;

class CssManipulator extends AbstractManipulator
{
    protected const TYPE = 'css';
    /**
     * @var CssParser
     */
    private $parser;
    /**
     * @var CssVisitor
     */
    private $cssVisitor;

    public function __construct(CssParser $parser, CssVisitor $cssVisitor)
    {
        $this->parser = $parser;
        $this->cssVisitor = $cssVisitor;
    }

    public function supports(string $type): bool
    {
        return $type === self::TYPE;
    }

    public function manipulate(string $rules, string $content): string
    {
        $crawler = new Crawler($content);
        $ast = $this->parser->parse($rules);
        $this->cssVisitor->visit($ast, $crawler);

        return $crawler->html();
    }
}